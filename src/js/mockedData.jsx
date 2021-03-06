const LOCATION_MOCKS = [
  { label: 'AlGhanem Group [Supplier]', value: { name: 'AlGhanem Group [Supplier]', type: 'Supplier' } },
  { label: 'Amazon [Supplier]', value: { name: 'Amazon [Supplier]', type: 'Supplier' } },
  { label: 'Bangalore 011 [Depot]', value: { name: 'Bangalore 011 [Depot]', type: 'Depot' } },
  { label: 'Bangalore- 20 Tech [Distributor]', value: { name: 'Bangalore- 20 Tech [Distributor]', type: 'Distributor' } },
  { label: 'Bangalore-Titan [Supplier]', value: { name: 'Bangalore-Titan [Supplier]', type: 'Supplier' } },
  { label: 'Bangalore-Vijayanagar [Warehouse]', value: { name: 'Bangalore-Vijayanagar [Warehouse]', type: 'Warehouse' } },
  { label: 'Belonia foods [Supplier]', value: { name: 'Belonia foods [Supplier]', type: 'Supplier' } },
  { label: 'Canada [Warehouse]', value: { name: 'Canada [Warehouse]', type: 'Warehouse' } },
  { label: 'CCS [Depot]', value: { name: 'CCS [Depot]', type: 'Depot' } },
  { label: 'CDMX [Cliente]', value: { name: 'CDMX [Cliente]', type: 'Cliente' } },
  { label: 'China [Supplier]', value: { name: 'China [Supplier]', type: 'Supplier' } },
  { label: 'CHT [Installation]', value: { name: 'CHT [Installation]', type: 'Installation' } },
  { label: 'Client Test [Cliente]', value: { name: 'Client Test [Cliente]', type: 'Cliente' } },
  { label: 'Corona CA [Depot]', value: { name: 'Corona CA [Depot]', type: 'Depot' } },
  { label: 'DELHI - BADARPUR [Book Wahrehouse]', value: { name: 'DELHI - BADARPUR [Book Wahrehouse]', type: 'Book Wahrehouse' } },
  { label: 'DELHI - EAST [Book Wahrehouse]', value: { name: 'DELHI - EAST [Book Wahrehouse]', type: 'Book Wahrehouse' } },
  { label: 'DELHI - IG AIRPORT [Book Wahrehouse]', value: { name: 'DELHI - IG AIRPORT [Book Wahrehouse]', type: 'Book Wahrehouse' } },
  { label: 'DELHI - NORTH [Book Wahrehouse]', value: { name: 'DELHI - NORTH [Book Wahrehouse]', type: 'Book Wahrehouse' } },
  { label: 'DELHI - SOUTH [Book Wahrehouse]', value: { name: 'DELHI - SOUTH [Book Wahrehouse]', type: 'Book Wahrehouse' } },
  { label: 'East End SH Clinic [SH Clinic]', value: { name: 'East End SH Clinic [SH Clinic]', type: 'SH Clinic' } },
  { label: 'East Medical Facility [Depot]', value: { name: 'East Medical Facility [Depot]', type: 'Depot' } },
  { label: 'East Pharmacy Depot [Depot]', value: { name: 'East Pharmacy Depot [Depot]', type: 'Depot' } },
  { label: 'East Pharmacy Supplier [Supplier]', value: { name: 'East Pharmacy Supplier [Supplier]', type: 'Supplier' } },
  { label: 'EXCELINDO [Supplier]', value: { name: 'EXCELINDO [Supplier]', type: 'Supplier' } },
  { label: 'FARIDABAD [Depot]', value: { name: 'FARIDABAD [Depot]', type: 'Depot' } },
  { label: 'Florida [Depot]', value: { name: 'Florida [Depot]', type: 'Depot' } },
  { label: 'GBAC [Installation]', value: { name: 'GBAC [Installation]', type: 'Installation' } },
  { label: 'Gujarat [Warehouse]', value: { name: 'Gujarat [Warehouse]', type: 'Warehouse' } },
  { label: 'Harbour [Depot]', value: { name: 'Harbour [Depot]', type: 'Depot' } },
  { label: 'HO-JKT [HO]', value: { name: 'HO-JKT [HO]', type: 'HO' } },
  { label: 'Importaciones VEN [Cliente]', value: { name: 'Importaciones VEN [Cliente]', type: 'Cliente' } },
  { label: 'INDIA - NOIDA [Book Wahrehouse]', value: { name: 'INDIA - NOIDA [Book Wahrehouse]', type: 'Book Wahrehouse' } },
  { label: 'ISAAC [Cliente]', value: { name: 'ISAAC [Cliente]', type: 'Cliente' } },
  { label: 'LC 002 [SH Clinic]', value: { name: 'LC 002 [SH Clinic]', type: 'SH Clinic' } },
  { label: 'MOM [Depot]', value: { name: 'MOM [Depot]', type: 'Depot' } },
  { label: 'Monitors [Book Wahrehouse]', value: { name: 'Monitors [Book Wahrehouse]', type: 'Book Wahrehouse' } },
  { label: 'New location [Depot]', value: { name: 'New location [Depot]', type: 'Depot' } },
  { label: 'OpenBoxes HQ [Depot]', value: { name: 'OpenBoxes HQ [Depot]', type: 'Depot' } },
  { label: 'Palletized [Depot]', value: { name: 'Palletized [Depot]', type: 'Depot' } },
  { label: 'PHH [Installation]', value: { name: 'PHH [Installation]', type: 'Installation' } },
  { label: 'PNC [Supplier]', value: { name: 'PNC [Supplier]', type: 'Supplier' } },
  { label: 'Porto [Book Wahrehouse]', value: { name: 'Porto [Book Wahrehouse]', type: 'Book Wahrehouse' } },
  { label: 'Principal [Principal]', value: { name: 'Principal [Principal]', type: 'Principal' } },
  { label: 'RIM India Pvt Ltd [Warehouse]', value: { name: 'RIM India Pvt Ltd [Warehouse]', type: 'Warehouse' } },
  { label: 'Rivercess [Depot]', value: { name: 'Rivercess [Depot]', type: 'Depot' } },
  { label: 'Sambas - Kalbar [Supplier]', value: { name: 'Sambas - Kalbar [Supplier]', type: 'Supplier' } },
  { label: 'Sepang Air Port [Book Wahrehouse]', value: { name: 'Sepang Air Port [Book Wahrehouse]', type: 'Book Wahrehouse' } },
  { label: 'SNET [Supplier]', value: { name: 'SNET [Supplier]', type: 'Supplier' } },
  { label: 'SO MEDAN [SO]', value: { name: 'SO MEDAN [SO]', type: 'SO' } },
  { label: 'SO SURABAYA [SO]', value: { name: 'SO SURABAYA [SO]', type: 'SO' } },
  { label: 'Toulouse [Supplier]', value: { name: 'Toulouse [Supplier]', type: 'Supplier' } },
  { label: 'Zwedru [Installation]', value: { name: 'Zwedru [Installation]', type: 'Installation' } },
  { label: 'Головной офис [Depot]', value: { name: 'Головной офис [Depot]', type: 'Depot' } },
];

const USERNAMES_MOCKS = ['Julian Benson',
  'Alyssa Chandler',
  'Diana Sharp',
  'Caleb Ramirez',
  'Sonia Rios',
  'Wilbur Moran',
  'Nadine Bowen',
  'Bradford Ingram',
  'Johnnie Rodriquez',
  'Kim Dennis',
];

const STOCK_LIST_MOCKS = [
  { value: '1', label: '1st Stock List' },
  { value: '2', label: '2nd Stock List' },
  { value: '3', label: '3rd Stock List' },
  { value: '4', label: '4th Stock List' },
];

const PRODUCTS_MOCKS = [
  { value: { code: 1, name: 'Advil 200mg' }, label: 'Advil 200mg' },
  { value: { code: 2, name: 'Tylenol 325mg' }, label: 'Tylenol 325mg' },
  { value: { code: 3, name: 'Aspirin 20mg' }, label: 'Aspirin 20mg' },
  { value: { code: 4, name: 'Similac Advance low iron 400g' }, label: 'Similac Advance low iron 400g' },
];

const STOCK_LIST_ITEMS_MOCKS = {
  1: [
    {
      product: { code: 1, name: 'Advil 200mg' }, maxQuantity: 10, monthlyConsumption: 350,
    },
    {
      product: { code: 4, name: 'Similac Advance low iron 400g' }, maxQuantity: 10, monthlyConsumption: 250,
    },
    {
      product: { code: 3, name: 'Aspirin 20mg' }, maxQuantity: 10, monthlyConsumption: 140,
    },
  ],
  2: [
    {
      product: { code: 2, name: 'Tylenol 325mg' }, maxQuantity: 10, monthlyConsumption: 120,
    },
    {
      product: { code: 1, name: 'Advil 200mg' }, maxQuantity: 10, monthlyConsumption: 400,
    },
    {
      product: { code: 4, name: 'Similac Advance low iron 400g' }, maxQuantity: 10, monthlyConsumption: 120,
    },
  ],
  3: [
    {
      product: { code: 3, name: 'Aspirin 20mg' }, maxQuantity: 10, monthlyConsumption: 55,
    },
    {
      product: { code: 1, name: 'Advil 200mg' }, maxQuantity: 10, monthlyConsumption: 44,
    },
    {
      product: { code: 2, name: 'Tylenol 325mg' }, maxQuantity: 10, monthlyConsumption: 55,
    },
  ],
  4: [
    { product: { code: 4, name: 'Similac Advance low iron 400g' }, maxQuantity: 10 },
    {
      product: { code: 3, name: 'Aspirin 20mg' }, maxQuantity: 10, monthlyConsumption: 100,
    },
    {
      product: { code: 2, name: 'Advil 200mg' }, maxQuantity: 10, monthlyConsumption: 140,
    },
  ],
};

const REASON_CODE_MOCKS = [
  { value: '1', label: 'Stocked out' },
  { value: '2', label: 'Low stock' },
  { value: '3', label: 'Because I said so' },
];

const AVAILABLE_LOTS = [
  {
    product: { code: 1, name: 'Advil 200mg' },
    lot: '1111',
    bin: '1',
    qtyAvailable: 50,
    expiryDate: '2018/05/31',
    recipient: true,
    qtyPicked: 5,
  },
  {
    product: { code: 1, name: 'Advil 200mg' },
    lot: '1111',
    bin: '2',
    qtyAvailable: '20',
    expiryDate: '2018/05/31',
    recipient: false,
    qtyPicked: 0,
  },
  {
    product: { code: 1, name: 'Advil 200mg' },
    lot: '2222',
    bin: '1',
    qtyAvailable: 50,
    expiryDate: '2018/06/10',
    recipient: true,
    qtyPicked: 5,
  },
  {
    product: { code: 2, name: 'Tylenol 325mg' },
    lot: '3131',
    bin: '1',
    qtyAvailable: 102,
    expiryDate: '2018/06/10',
    recipient: false,
    qtyPicked: 0,
  },
  {
    product: { code: 2, name: 'Tylenol 325mg' },
    lot: '3333',
    bin: '1',
    qtyAvailable: 103,
    expiryDate: '2018/06/10',
    recipient: false,
    qtyPicked: 5,
  },
  {
    product: { code: 2, name: 'Tylenol 325mg' },
    lot: '3333',
    bin: '2',
    qtyAvailable: 101,
    expiryDate: '2018/06/10',
    recipient: true,
    qtyPicked: 5,
  },
  {
    product: { code: 3, name: 'Aspirin 20mg' },
    lot: '4444',
    bin: '1',
    qtyAvailable: 200,
    expiryDate: '2018/06/01',
    recipient: false,
    qtyPicked: 0,
  },
  {
    product: { code: 3, name: 'Aspirin 20mg' },
    lot: '5555',
    bin: '1',
    qtyAvailable: 300,
    expiryDate: '2018/06/02',
    recipient: true,
    qtyPicked: 0,
  },
  {
    product: { code: 3, name: 'Aspirin 20mg' },
    lot: '5555',
    bin: '2',
    qtyAvailable: 100,
    expiryDate: '2018/06/03',
    recipient: false,
    qtyPicked: 10,
  },
  {
    product: { code: 4, name: 'Similac Advance low iron 400g' },
    lot: '6666',
    bin: '1',
    qtyAvailable: '123',
    expiryDate: '2018/06/01',
    recipient: false,
    qtyPicked: 10,
  },
  {
    product: { code: 4, name: 'Similac Advance low iron 400g' },
    lot: '7777',
    bin: '1',
    qtyAvailable: '111',
    expiryDate: '2018/06/02',
    recipient: false,
    qtyPicked: 0,
  },
];

export {
  LOCATION_MOCKS,
  USERNAMES_MOCKS,
  STOCK_LIST_MOCKS,
  PRODUCTS_MOCKS,
  STOCK_LIST_ITEMS_MOCKS,
  REASON_CODE_MOCKS,
  AVAILABLE_LOTS,
};
