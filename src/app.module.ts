import { Module } from '@nestjs/common';
import { InfraestructureModule } from './infrastructure/infraestructure.module';

@Module({
  imports: [
    InfraestructureModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }