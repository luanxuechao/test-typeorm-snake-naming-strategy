
import { TestModel } from './test.entity'
import { Injectable, } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
@Injectable()
export class AppService {
  constructor(@InjectRepository(TestModel)
  private testModel: Repository<TestModel>) { }
  async getHello(): Promise<string> {
    const value = plainToClass(TestModel, { orderId: '123' })
    await this.testModel.save(value)
    return 'Hello World!';
  }
}
