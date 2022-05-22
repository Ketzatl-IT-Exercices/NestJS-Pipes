import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperPipe implements PipeTransform {
  transform(name: string, metadata: ArgumentMetadata) {
    return name.toUpperCase();
  }
}
