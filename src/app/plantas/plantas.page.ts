import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, Platform, ToastController } from '@ionic/angular';
import { DataService, Item } from './services/data.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.page.html',
  styleUrls: ['./plantas.page.scss'],
  providers: [DataService]
})
export class PlantasPage implements OnInit {

  items: Item[] = [];
  newItem: Item = <Item>{};

  @ViewChild('myList')myList!: IonList;

  constructor(private dataService: DataService, private plt: Platform, private toastController: ToastController) {
   this.plt.ready().then(() => {
    this.loadItems();
   });
  }

  ngOnInit() {}

  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.dataService.addData(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.showToast('Planta agregada exitosamente');
      this.loadItems();
    })
  }

  loadItems() {
    this.dataService.getData().then(items => {
      this.items = items;
    })
  }

  updateItem(item: Item) {
    console.log("item: ", item)
    item.nombre = `UPDATE: ${item.nombre}`;
    item.modified = Date.now();

    this.dataService.updateData(item).then(item => {
      this.showToast('Planta actualizada exitosamente');
      this.myList.closeSlidingItems();
      this.loadItems();
    })
  }

  deleteItems(item: Item) {
    this.dataService.removeData(item.id).then(item => {
      this.showToast('Planta eliminada exitosamente');
      this.myList.closeSlidingItems();
      this.loadItems();
    })
  }

  async showToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    
    toast.present();
  }

  /*async loadData() {
    // this.listData = await this.dataService.getData();

    this.dataService.getData().subscribe(res => {
      this.listData = res;
    })
  }
  
  async addData() {
    this.listData = await this.dataService.addData(`Simon ${Math.floor(Math.random() * 100 )}`);
    this.loadData();
  }

  async removeData(index: any) {
    this.dataService.removeData(index);
    this.listData.splice(index, 1);
  }*/

}
