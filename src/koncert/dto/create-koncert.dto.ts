import { IsBoolean, IsDate, IsInt, IsString } from "class-validator";

export class CreateKoncertDto {
  id: number;
  /**
    * The Name of the Artist
    * @example 'The Beatles'
  */
  @IsString()
  artist: string;

  /**
    * Start Date of the Concert
    * @example '2021-12-24T18:00:00.000Z'
  */
  @IsDate()
  start: Date;

  /**
    * The duration of the concert in minutes
    * @example 120
  */
  @IsInt()
  duration: number;

  /**
    * Is the concert cancelled
    * @example false
  */
  @IsBoolean()
  cancelled: boolean;
}
