import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoom:number=190 ;
  lat=40.349841283655195;
  lng=-94.8827696546299;
  // Markers
  markers:marker[]=[
    {
      name: 'Report1',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,
      lat:40.349841283655195,
      lng:-94.8827696546299
      // ,draggable=true
    },
    {
      name: 'Report2',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,      
      lat:40.549841283655195,
      lng:-94.6827696546299
    },
    {
      name: 'Report3',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,
      lat:40.549841283655195,
      lng:-94.4827696546299
    },

    {
      name: 'Report4',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,
      lat:40.249841283655195,
      lng:-94.9827696546299
    },

    {
      name: 'Report5',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,
      lat:40.249841283655195,
      lng:-94.2827696546299
    }


  ]

constructor(){

}
}
// Marker Type
interface marker{
  name?:string;
  deceased:number;
  immediate:number;
  delayed:number;
  minor:number;
  lat:number;
  lng:number
  // ;
  // draggable:boolean
}

  // onChoseLocation(event){
  //   console.log(event);  
  //   this.latitude=event.coords.lat;
  //   this.longitude=event.coords.lng;
  //   // this.latitude2=event.coords.lat;
  //   // this.longitude2=event.coords.lng;

  // }