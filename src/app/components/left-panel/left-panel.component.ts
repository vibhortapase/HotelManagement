import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../SharedModule';

@Component({
  selector: 'app-left-panel',
  imports: [SharedModule],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css'
})
export class LeftPanelComponent implements OnInit {
  HodelModel: any[] = []
  @Input() hotelDetailData: any;

  ngOnInit(): void {
    debugger
    this.assignData();
    this.hotelDetailData
  }
  assignData() {
    debugger
    let addresslist = []
    let basiInfo = []
    addresslist = this.hotelDetailData['address']
    basiInfo = this.hotelDetailData['info']
    this.HodelModel['name'] = this.hotelDetailData['name']
    this.HodelModel['group'] = this.hotelDetailData['group']
    this.HodelModel['address'] = addresslist['street'] + ' ' + addresslist['pincode'] + ' ' + addresslist['state'] + ' ' + addresslist['country']
    this.HodelModel['phone'] = addresslist['phone']
    this.HodelModel['email'] = addresslist['email']
    this.HodelModel['image'] = this.hotelDetailData?.image || null
    this.HodelModel['shortName'] = basiInfo['shortName']
    this.HodelModel['serviceId'] = basiInfo['serviceId']
    this.HodelModel['serviceType'] = basiInfo['serviceType']
    this.HodelModel['currency'] = basiInfo['currency']
    this.HodelModel['location'] = basiInfo['location']
    // this.HodelModel = this.hotelDetailData 
        

  }
}
