import { AggregateDescriptor } from "@progress/kendo-data-query";


// product
export interface Product {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    Category: { [Key: string]: unknown };
}

// group
export interface Group {
    field: string;
    aggregates: AggregateDescriptor[];
}

// cellconfig
export interface CellConfig {
    background: string;
    textAlign: string;
}