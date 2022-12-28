import { TestBed } from "@angular/core/testing";

import { ProductsService } from "./products.service";
import { AppModule } from "../../app.module";

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [AppModule]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
