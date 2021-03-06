import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CRMBasicService} from '../@torgcrm/services/CRMBasicService';

@Injectable()
export class CRMPagesService extends CRMBasicService {
  constructor(http: HttpClient) {
    super('http://localhost:8080/api/admin/pages', http);
  }
}
