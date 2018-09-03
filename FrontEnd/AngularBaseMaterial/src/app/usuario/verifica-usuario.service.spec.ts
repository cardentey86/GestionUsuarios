import { TestBed, inject } from '@angular/core/testing';

import { VerificaUsuarioService } from './verifica-usuario.service';

describe('VerificaUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificaUsuarioService]
    });
  });

  it('should be created', inject([VerificaUsuarioService], (service: VerificaUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
