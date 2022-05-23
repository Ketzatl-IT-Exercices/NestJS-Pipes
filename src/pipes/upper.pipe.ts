import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
// value: string = name
export class UpperPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    return value.toUpperCase();
  }
}
