let filterTextParams = {
  filterOptions: ["contains", "notContains"],
  textFormatter: (r) => {
    if (r == null) return null;
    return r
      .toLowerCase()
      .replace(/[àáâãäå]/g, "a")
      .replace(/æ/g, "ae")
      .replace(/ç/g, "c")
      .replace(/[èéêë]/g, "e")
      .replace(/[ìíîï]/g, "i")
      .replace(/ñ/g, "n")
      .replace(/[òóôõö]/g, "o")
      .replace(/œ/g, "oe")
      .replace(/[ùúûü]/g, "u")
      .replace(/[ýÿ]/g, "y");
  },
  debounceMs: 200,
  suppressAndOrCondition: true,
};

export const columns = [
  {
    field: "id",
    headerName: "ID",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "name",
    headerName: "Name",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "open",
    headerName: "Open Time",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "close",
    headerName: "Close Time",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "officeAddress",
    headerName: "Office Address",
  },
];

export const rows = [
  {
    id: "25",
    name: "Jon",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "885",
    name: "Cersei",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "78",
    name: "Jaime",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "23",
    name: "Arya",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "55",
    name: "Daenerys",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "66",
    name: "Hommie",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "77",
    name: "Ferrara",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "88",
    name: "Rossini",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "44",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "78",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "79",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: "29",
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
];
