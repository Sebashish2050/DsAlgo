var array = [
  {
      "node": "ApparelSizeVariantProduct",
      "children": [
          {
              "node": "Product",
              "name": "baseProduct",
              "children": []
          }
      ]
  },
  {
      "node": "Product",
      "children": [
          {
              "node": "Media",
              "name": "picture",
              "children": []
          }
      ]
  },
  {
      "node": "Consignment",
      "children": [
          {
              "node": "Carrier",
              "name": "carrierDetails",
              "children": []
          },
          {
              "node": "Warehouse",
              "name": "warehouse",
              "children": []
          },
          {
              "node": "ConsignmentEntry",
              "name": "consignmentEntries",
              "children": []
          },
          {
              "node": "PackagingInfo",
              "name": "packaginginfos",
              "children": []
          }
      ]
  },
  {
      "node": "Catalog",
      "children": []
  },
  {
      "node": "PaymentStatus",
      "children": []
  },
  {
      "node": "Vendor",
      "children": []
  },
  {
      "node": "DeliveryStatus",
      "children": []
  },
  {
      "node": "Country",
      "children": []
  },
  {
      "node": "BaseSite",
      "children": []
  },
  {
      "node": "OrderEntry",
      "children": [
          {
              "node": "ApparelSizeVariantProduct",
              "name": "product",
              "children": []
          },
          {
              "node": "Order",
              "name": "order",
              "children": []
          }
      ]
  },
  {
      "node": "Region",
      "children": [
          {
              "node": "Country",
              "name": "country",
              "children": []
          }
      ]
  },
  {
      "node": "DeliveryMode",
      "children": []
  },
  {
      "node": "Currency",
      "children": []
  },
  {
      "node": "AbstractPromotion",
      "children": []
  },
  {
      "node": "Address",
      "children": [
          {
              "node": "Title",
              "name": "title",
              "children": []
          },
          {
              "node": "Region",
              "name": "region",
              "children": []
          },
          {
              "node": "Country",
              "name": "country",
              "children": []
          }
      ]
  },
  {
      "node": "Warehouse",
      "children": [
          {
              "node": "PointOfService",
              "name": "pointsOfService",
              "children": []
          },
          {
              "node": "Vendor",
              "name": "vendor",
              "children": []
          }
      ]
  },
  {
      "node": "Title",
      "children": []
  },
  {
      "node": "PromotionResult",
      "children": [
          {
              "node": "AbstractPromotion",
              "name": "promotion",
              "children": []
          }
      ]
  },
  {
      "node": "ReturnStatus",
      "children": []
  },
  {
      "node": "PackagingInfo",
      "children": []
  },
  {
      "node": "CheckoutPaymentType",
      "children": []
  },
  {
      "node": "Media",
      "children": [
          {
              "node": "CatalogVersion",
              "name": "catalogVersion",
              "children": []
          }
      ]
  },
  {
      "node": "Carrier",
      "children": []
  },
  {
      "node": "OrderStatus",
      "children": []
  },
  {
      "node": "CatalogVersion",
      "children": [
          {
              "node": "Catalog",
              "name": "catalog",
              "children": []
          }
      ]
  },
  {
      "node": "Order",
      "children": [
          {
              "node": "PaymentMode",
              "name": "paymentMode",
              "children": []
          },
          {
              "node": "OrderEntry",
              "name": "entries",
              "children": []
          },
          {
              "node": "DeliveryMode",
              "name": "deliveryMode",
              "children": []
          },
          {
              "node": "CheckoutPaymentType",
              "name": "paymentType",
              "children": []
          },
          {
              "node": "PaymentStatus",
              "name": "paymentStatus",
              "children": []
          },
          {
              "node": "Currency",
              "name": "currency",
              "children": []
          },
          {
              "node": "DeliveryStatus",
              "name": "deliveryStatus",
              "children": []
          },
          {
              "node": "Address",
              "name": "deliveryAddress",
              "children": []
          },
          {
              "node": "OrderStatus",
              "name": "status",
              "children": []
          },
          {
              "node": "BaseSite",
              "name": "site",
              "children": []
          },
          {
              "node": "ReturnRequest",
              "name": "returnRequests",
              "children": []
          },
          {
              "node": "User",
              "name": "user",
              "children": []
          },
          {
              "node": "Address",
              "name": "paymentAddress",
              "children": []
          },
          {
              "node": "PromotionResult",
              "name": "allPromotionResults",
              "children": []
          },
          {
              "node": "Consignment",
              "name": "consignments",
              "children": []
          }
      ]
  },
  {
      "node": "ReturnRequest",
      "children": [
          {
              "node": "ReturnStatus",
              "name": "status",
              "children": []
          },
          {
              "node": "Currency",
              "name": "currency",
              "children": []
          }
      ]
  },
  {
      "node": "Category",
      "children": [
          {
              "node": "CatalogVersion",
              "name": "catalogVersion",
              "children": []
          }
      ]
  },
  {
      "node": "User",
      "children": [
          {
              "node": "Address",
              "name": "addresses",
              "children": []
          }
      ]
  },
  {
      "node": "PaymentMode",
      "children": []
  },
  {
      "node": "ApparelSizeVariantProduct",
      "children": [
          {
              "node": "Media",
              "name": "picture",
              "children": []
          },
          {
              "node": "CatalogVersion",
              "name": "catalogVersion",
              "children": []
          },
          {
              "node": "Category",
              "name": "supercategories",
              "children": []
          }
      ]
  },
  {
      "node": "ConsignmentEntry",
      "children": [
          {
              "node": "AbstractOrderEntry",
              "name": "orderEntry",
              "children": []
          }
      ]
  },
  {
      "node": "PointOfService",
      "children": [
          {
              "node": "Address",
              "name": "address",
              "children": []
          },
          {
              "node": "PointOfServiceTypeEnum",
              "name": "type",
              "children": []
          }
      ]
  },
  {
      "node": "PointOfServiceTypeEnum",
      "children": []
  },
  {
      "node": "AbstractOrderEntry",
      "children": [
          {
              "node": "ApparelSizeVariantProduct",
              "name": "product",
              "children": []
          }
      ]
  }
];

var output = [];

array.forEach(function(item) {
  var existing = output.filter(function(v, i) {
    return v.node === item.node;
  });
  if (existing.length) {
    var existingIndex = output.indexOf(existing[0]);
    output[existingIndex].children = output[existingIndex].children.concat(item.children);
  } else {
    output.push(item);
  }
});

console.dir(JSON.stringify(output));