type Item = {
    id: number;
    name: string;
    description: string;
    category: string;
    dateAdded: string;
  }

  type useDataManagementProps = {
    data: Item[]
  }