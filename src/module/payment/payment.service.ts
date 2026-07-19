import { prisma } from "../../lib/prisma";
import { paymentStatus } from "../../../prisma/generated/prisma/enums";
import { stripe } from "../../lib/Stripte";

const createPayment = async (rentalId: string) => {
    const rental = await prisma.rentalRequest.findUnique({
      where: {
        id: rentalId,
      },
      include: {
        property: true,
      },
    });
  
    if (!rental) {
      throw new Error("Rental not found");
    };
    if(rental.status==="APPROVED"){
      throw new Error("request is not Approved");
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "bdt",
            unit_amount: Number(rental.property.price) * 100,
            product_data: {
              name: rental.property.title,
            },
          },
        },
      ],
      success_url: `${process.env.CLIENT_URL}/payment-success`,
      cancel_url: `${process.env.CLIENT_URL}/payment-failed`,
      metadata: {
        rentalId,
      },
    });

    // console.log(session)
  
    const transactionId = typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent?.id ?? session.id;

    const payment = await prisma.payment.create({
      data: {
        rentalRequest_id: rental.id,
        tenantId: rental.tenant_id,
        amount: rental.property.price,
        paymentProvider: "CARD",
        status: "PENDING",
        sessionId: session.id,
        transaction_id: transactionId,
        customer_id: rental.tenant_id,
      },
    });
    return {payment,checkoutUrl:session.url}
};

const confirmPayment = async (sessionId: string) => {
  // console.log(sessionId.);
  const session = await stripe.checkout.sessions.retrieve(
    sessionId
  );
  if (session.payment_status !== "paid") {
    throw new Error("Payment is not completed");
  }
  const payment = await prisma.payment.findFirst({
    where: {
      sessionId: session.id,
    },
  });
  if (!payment) {
    throw new Error("Payment record not found");
  }
  const updatedPayment = await prisma.payment.update({
    where: {
      id: payment.id,
    },
    data: {
      status: paymentStatus.COMPLETED,
      transaction_id:
        session.payment_intent?.toString(),
      paidAt: new Date(),
    },
  });
  await prisma.rentalRequest.update({
    where: {
      id: payment.rentalRequest_id,
    },
    data: {
      status: paymentStatus.COMPLETED,
    },
  });
  return updatedPayment;
};

const payments = async (id:string)=>{
    const result = await prisma.payment.findMany({
        where:{
            tenantId:id
        }
    });
    return result;
}

const payment = async (id:string)=>{
    const result = await prisma.payment.findUnique({
        where:{
            id
        }
    });
return result;
}



export const paymentservice = {
    createPayment,
    confirmPayment,
    payments,
    payment
}