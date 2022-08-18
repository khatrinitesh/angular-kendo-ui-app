export class Product {
    public ProductID: number;
    public ProductName = "";
    public Discontinued?= false;
    public UnitsInStock?: number;
    public UnitPrice = 0;
    public Category = {
        CategoryID: 0,
        CategoryName: "",
    };
}

export class Order {
    public OrderID: number;
    public CustomerID: string;
    public EmployeeID: number;
    public OrderDate: Date;
    public RequiredDate: Date;
    public ShippedDate: Date;
    public ShipVia: number;
    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipRegion: string;
    public ShipPostalCode: string;
    public ShipCountry: string;
}

export class Customer {
    public Id = '';
    public CompanyName = "";
    public ContactName = "";
    public ContactTitle = "";
    public Address?: string = "";
    public City = "";
    public PostalCode?= "";
    public Phone?= "";
    public Fax?= "";
}

export class Category {
    public CategoryID?: number;
    public CategoryName?: string;
    public Description?: string;
}