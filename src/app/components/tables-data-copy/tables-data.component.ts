// import { Component, OnInit } from '@angular/core';
// import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
// import { map, scan } from 'rxjs/operators';

// type Row = {
//   tableColOne: string;
//   tableColTwo: string;
// };

// type Table = Array<Row>;

// interface SortConfig {
//   column: string;
//   direction: 'asc' | 'desc';
// }

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.styl'],
// })
// export class TableComponent implements OnInit {
//   table = [];
//   table$: Observable<Table>;
//   sortableColumn$ = new BehaviorSubject<string>('');
//   sortConfig = {} as SortConfig;

//   sortDirection$ = this.sortableColumn$.pipe(
//     scan<string, SortConfig>(
//       (config, column) => {
//         return config.column === column
//           ? { column, direction: config.direction === 'desc' ? 'asc' : 'desc' }
//           : { column, direction: 'desc' };
//       },
//       { column: '',  direction: 'desc' }
//     )
//   );

//   constructor() {
//     //This can be a more meaningful call to some table data
//     this.table$ = of(this.table);
//   }

//   ngOnInit(): void {
//     this.table$ = combineLatest([
//       of(this.table),
//       this.sortDirection$,
//     ]).pipe(
//       map(([data, sortConfig]) => {
//         return sortConfig.column ? this.sort(data, sortConfig.column, sortConfig.direction) : data;
//       })
//     );
//     this.sortDirection$.subscribe((config) => {
//       this.sortConfig = config;
//     });
//   }

//   setSortColumn(column: string) {
//     this.sortableColumn$.next(column);
//   }

//   sort(
//     data: Table = [],
//     column: SortConfig['column'],
//     direction: SortConfig['direction'] = 'desc'
//   ): Table["table"] {
//     return data.sort((rowOne: Row, rowTwo: Row) => {
//       const firstValue = rowOne[column];
//       const secondValue = rowTwo[column];
//       const isDescending = direction === 'desc';
//       // values are equal so return 0 -- don't need to sort
//       if (firstValue === secondValue) return 0;
      
//       // toggle between descending and ascending dependent on the currently applied sort direction
//       return (firstValue > secondValue) ? (isDescending ? 1 : -1) : (isDescending ? -1 : 1)
//     });
//   }
// }