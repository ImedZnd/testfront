import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {CountryServiceService} from "../../services/country-service.service";
import {UserServiceService} from "../../services/user-service.service";
import {TransactionServiceService} from "../../services/transaction-service.service";
import {interval, Subscription} from 'rxjs';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  color = 'primary';
  mode = 'determinate';
  value = 100;
  bufferValue = 100;


  constructor(
    private countryService: CountryServiceService,
    private personService: UserServiceService,
    private transactionService: TransactionServiceService,
  ) {
  }

  ngAfterViewInit(): void {
  }
  subscription: Subscription;

  ngOnInit(): void {
    this.donatChartUserState()
    this.pupulateFrontRow()
    const source = interval(500);

    this.subscription = source.subscribe(val => this.personService.kycAndNumber().subscribe(
      data => {
        const updated_normal_data:any = [];
        data.forEach(row => {
          const temp_row = [
            new Date(row.timestamp).getTime(),
            row.value
          ];
          updated_normal_data.push(temp_row)
        });
        this.options.series['data'] = updated_normal_data;
        Highcharts.chart('containerX', this.options);
        Highcharts.chart('optionHalfPie', this.optionHalfPie);
      },
      error => {
        console.log('Something went wrong.');
      })
    );
  }

  allUsers :number = 0
  allFraudsters :number = 0
  allVerified :number = 0
  totalFlags :number = 0
  latestJoined :number = 0
  pupulateFrontRow(){
    this.personService.countAllPerson().subscribe(data =>this.allUsers = data)
    this.personService.countAllUsersByIsFraud(true).subscribe(data =>this.allFraudsters = data)
    this.personService.countAllByHasEmail(true).subscribe(data =>this.allVerified = data)
    this.personService.countAllFlags().subscribe(data =>this.totalFlags = data)
    this.personService.countAllUsersByYear(2018).subscribe(data =>this.latestJoined = data)
  }


  usersState: any[] = []
  donatChartUserState() {
    // this.personService.stateAndCount().subscribe((data) => {
    //   const updated_normal_data: any[] = [];
    //   data.forEach(row => {
    //     updated_normal_data.push(row)
    //     this.usersState.push(row);
    //     console.log(row)
    //   })
    //   console.log(updated_normal_data)
    //   this.options.series = [
    //     {
    //       name: 'Brands',
    //       colorByPoint: true,
    //       data: this.personService.stateAndCount()
    //     }];
    //   console.log(this.usersState)
    // })
  }


  public optionHalfPie: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: true,
    },
      title: {
      text: 'Browser shares 2017',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data:
        [
        // ['Chrome', 58.9],
        // ['Firefox', 13.29],
        // ['Internet Explorer', 13],
        // ['Edge', 3.78],
        // ['Safari', 3.42],
        // {
        //   name: 'Other',
        //   y: 7.61,
        //   dataLabels: {
        //     enabled: false
        //   }
        // }
      ]
    }],
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
  }

   options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: true,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares'
    },
    tooltip: {
      pointFormat: '{series.name}: {point.percentage:.1f}%'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: []
      //   [{
      //   name: 'Chrome',
      //   y: 59.41,
      //   sliced: true,
      //   selected: true
      // }, {
      //   name: 'Internet Explorer',
      //   y: 11.84
      // }, {
      //   name: 'Firefox',
      //   y: 11.85
      // }, {
      //   name: 'Edge',
      //   y: 4.67
      // }, {
      //   name: 'Safari',
      //   y: 5.18
      // }, {
      //   name: 'Sogou Explorer',
      //   y: 1.64
      // }, {
      //   name: 'Opera',
      //   y: 1.6
      // }, {
      //   name: 'QQ',
      //   y: 1.2
      // }, {
      //   name: 'Other',
      //   y: 2.61
      // }]
    }]
  }
}
