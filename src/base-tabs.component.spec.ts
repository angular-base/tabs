import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BaseTabsComponent} from './base-tabs.component';

describe('BaseTabsComponent', () => {
    let component: BaseTabsComponent;
    let fixture: ComponentFixture<BaseTabsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BaseTabsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BaseTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
