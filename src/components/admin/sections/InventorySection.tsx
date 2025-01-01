import { useState } from 'react';
import { Box, Search, Filter, Plus, AlertCircle, Package, Boxes, Archive } from 'lucide-react';

type InventoryItem = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minQuantity: number;
  supplier: string;
  lastRestocked: string;
  unit: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
};

const mockInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'Science Lab Equipment Set',
    category: 'Laboratory',
    quantity: 25,
    minQuantity: 10,
    supplier: 'SciTech Supplies',
    lastRestocked: '2024-02-15',
    unit: 'sets',
    status: 'in-stock'
  },
  {
    id: '2',
    name: 'Classroom Chairs',
    category: 'Furniture',
    quantity: 8,
    minQuantity: 20,
    supplier: 'School Furnishings Co.',
    lastRestocked: '2024-01-20',
    unit: 'pieces',
    status: 'low-stock'
  },
  {
    id: '3',
    name: 'Whiteboard Markers',
    category: 'Stationery',
    quantity: 0,
    minQuantity: 50,
    supplier: 'Office Supplies Ltd.',
    lastRestocked: '2024-02-01',
    unit: 'boxes',
    status: 'out-of-stock'
  },
  {
    id: '4',
    name: 'Sports Equipment Bundle',
    category: 'Sports',
    quantity: 15,
    minQuantity: 5,
    supplier: 'Sports Gear Inc.',
    lastRestocked: '2024-03-01',
    unit: 'sets',
    status: 'in-stock'
  },
  {
    id: '5',
    name: 'Computer Monitors',
    category: 'IT Equipment',
    quantity: 4,
    minQuantity: 5,
    supplier: 'Tech Solutions',
    lastRestocked: '2024-02-10',
    unit: 'pieces',
    status: 'low-stock'
  },
  {
    id: '6',
    name: 'Library Books',
    category: 'Books',
    quantity: 1200,
    minQuantity: 500,
    supplier: 'Educational Publishers',
    lastRestocked: '2024-01-15',
    unit: 'books',
    status: 'in-stock'
  }
];

const categories = ['All Categories', 'Laboratory', 'Furniture', 'Stationery', 'Sports', 'IT Equipment', 'Books'];

export function InventorySection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'bg-green-100 text-green-800';
      case 'low-stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'out-of-stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredInventory = mockInventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.supplier.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All Categories' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Inventory Management</h2>
        <p className="mt-1 text-sm text-gray-500">Track and manage school supplies and equipment</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Boxes className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Items</p>
              <p className="text-xl font-semibold text-gray-900">1,252</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Low Stock Items</p>
              <p className="text-xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Package className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Out of Stock</p>
              <p className="text-xl font-semibold text-gray-900">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions and Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg border">
        <div className="flex-1 min-w-[240px] relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="in-stock">In Stock</option>
            <option value="low-stock">Low Stock</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Plus size={20} />
            Add Item
          </button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white shadow-sm border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Restocked
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Box className="h-5 w-5 text-gray-500" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">Supplier: {item.supplier}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity} {item.unit}</div>
                    <div className="text-sm text-gray-500">Min: {item.minQuantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {item.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.lastRestocked}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}