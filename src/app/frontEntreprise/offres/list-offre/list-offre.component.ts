import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Offre} from '../../../Models/Offre.model';
import {OffreService} from '../../../services/offre.service';


@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.scss']
})

export class ListOffreComponent implements OnInit {
  displayedColumns: string[] = ['city', 'type', 'description', 'user' ];
  dataSource: MatTableDataSource<Offre>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private offreService : OffreService) {}

  ngOnInit() {
      this.offreService.getOffres().subscribe(value => {
          this.dataSource = new MatTableDataSource(value['_embedded']['offres']);
          console.log(value['_embedded']['offres']);
      },error1 => {
          console.log("erreur feetch offres");
      });

      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


