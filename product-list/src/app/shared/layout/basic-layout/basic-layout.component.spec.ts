import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BasicLayoutComponent } from "./basic-layout.component";
import { HeaderComponent } from "../header/header.component";
import { AppModule } from "../../../app.module";

describe("BasicLayoutComponent", () => {
  let component: BasicLayoutComponent;
  let fixture: ComponentFixture<BasicLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicLayoutComponent,
        HeaderComponent],
      imports: [AppModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BasicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
