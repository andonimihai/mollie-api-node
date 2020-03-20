import { PaymentChargebackEmbed } from '../../../types/payment/chargeback';
import { CommonListParameters } from '../../../types/parameters';

interface ContextParameters {
  paymentId: string;
}

export type GetParameters = ContextParameters & {
  embed?: PaymentChargebackEmbed[];
};

export type ListParameters = ContextParameters &
  CommonListParameters & {
    embed?: PaymentChargebackEmbed[];
  };
