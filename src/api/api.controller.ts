import { Controller, Get, HostParam } from '@nestjs/common';
import { get } from 'http';

@Controller({host: ':version.api.localhost'})
export class ApiController {
    @Get()
    index(@HostParam('version') version:string): string {
        return `Hello, API ${version}`;
    }
}
