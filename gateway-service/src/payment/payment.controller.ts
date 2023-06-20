import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ROLE } from 'src/auth/enums/role.enum';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly paymentService: ClientProxy,
  ) {}

  @Get()
  public getPaymentHello() {
    return this.paymentService.send('getHello', {});
  }

  @Get('history/self')
  public getSelfBills(@Req() req: any) {
    return this.paymentService.send('PAYMENT.GET_BILLS_OF_USER', req.user._id);
  }

  @Post()
  public createPaymentIntent(
    @Body() body: CreatePaymentIntentDto,
    @Req() req: any,
  ) {
    const data = { ...body, userId: req.user._id };
    return this.paymentService.send('PAYMENT.CREATE_PAYMENT_INTENT', data);
  }

  @Post('refund/:id')
  @Roles(ROLE.ADMIN)
  public refundBill(@Req() req: any, @Param('id') id: string) {
    return this.paymentService.send('PAYMENT.REFUND_BILL', id);
  }
}
