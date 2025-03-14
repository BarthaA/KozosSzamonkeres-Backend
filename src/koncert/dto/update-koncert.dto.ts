import { PartialType } from '@nestjs/mapped-types';
import { CreateKoncertDto } from './create-koncert.dto';
import { IsBoolean, IsDate, IsInt, IsString } from 'class-validator';

export class UpdateKoncertDto extends PartialType(CreateKoncertDto) {
  @IsString()
  artist: string;
  @IsDate()
  start: Date;
  @IsInt()
  duration: number;
  @IsBoolean()
  cancelled?: boolean;
}
