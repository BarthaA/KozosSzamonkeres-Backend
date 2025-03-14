import { Injectable } from '@nestjs/common';
import { CreateKoncertDto } from './dto/create-koncert.dto';
import { UpdateKoncertDto } from './dto/update-koncert.dto';

@Injectable()
export class KoncertService {
  create(createKoncertDto: CreateKoncertDto) {
    return 'This action adds a new koncert';
  }

  findAll() {
    return `This action returns all koncert`;
  }

  findOne(id: number) {
    return `This action returns a #${id} koncert`;
  }

  update(id: number, updateKoncertDto: UpdateKoncertDto) {
    return `This action updates a #${id} koncert`;
  }

  remove(id: number) {
    return `This action removes a #${id} koncert`;
  }
}
