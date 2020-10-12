{
    "node": "root",
    "children": [
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
                    "children": [
                        {
                            "node": "Product",
                            "name": "product",
                            "children": [
                                {
                                    "node": "Media",
                                    "name": "picture",
                                    "children": [
                                        {
                                            "node": "CatalogVersion",
                                            "name": "catalogVersion",
                                            "children": [
                                                {
                                                    "node": "Catalog",
                                                    "name": "catalog",
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "node": "CatalogVersion",
                                    "name": "catalogVersion",
                                    "children": [
                                        {
                                            "node": "Catalog",
                                            "name": "catalog",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "node": "Category",
                                    "name": "supercategories",
                                    "children": [
                                        {
                                            "node": "CatalogVersion",
                                            "name": "catalogVersion",
                                            "children": [
                                                {
                                                    "node": "Catalog",
                                                    "name": "catalog",
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "node": "Order",
                            "name": "order",
                            "children": []
                        }
                    ]
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
                    "children": [
                        {
                            "node": "Title",
                            "name": "title",
                            "children": []
                        },
                        {
                            "node": "Region",
                            "name": "region",
                            "children": [
                                {
                                    "node": "Country",
                                    "name": "country",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "node": "Country",
                            "name": "country",
                            "children": []
                        }
                    ]
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
                    "node": "User",
                    "name": "user",
                    "children": [
                        {
                            "node": "Address",
                            "name": "addresses",
                            "children": [
                                {
                                    "node": "Title",
                                    "name": "title",
                                    "children": []
                                },
                                {
                                    "node": "Region",
                                    "name": "region",
                                    "children": [
                                        {
                                            "node": "Country",
                                            "name": "country",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "node": "Country",
                                    "name": "country",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "node": "Address",
                    "name": "paymentAddress",
                    "children": [
                        {
                            "node": "Title",
                            "name": "title",
                            "children": []
                        },
                        {
                            "node": "Region",
                            "name": "region",
                            "children": [
                                {
                                    "node": "Country",
                                    "name": "country",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "node": "Country",
                            "name": "country",
                            "children": []
                        }
                    ]
                },
                {
                    "node": "PromotionResult",
                    "name": "allPromotionResults",
                    "children": [
                        {
                            "node": "AbstractPromotion",
                            "name": "promotion",
                            "children": []
                        }
                    ]
                },
                {
                    "node": "Consignment",
                    "name": "consignments",
                    "children": [
                        {
                            "node": "Carrier",
                            "name": "carrierDetails",
                            "children": []
                        },
                        {
                            "node": "Warehouse",
                            "name": "warehouse",
                            "children": [
                                {
                                    "node": "PointOfService",
                                    "name": "pointsOfService",
                                    "children": [
                                        {
                                            "node": "Address",
                                            "name": "address",
                                            "children": [
                                                {
                                                    "node": "Title",
                                                    "name": "title",
                                                    "children": []
                                                },
                                                {
                                                    "node": "Region",
                                                    "name": "region",
                                                    "children": [
                                                        {
                                                            "node": "Country",
                                                            "name": "country",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "node": "Country",
                                                    "name": "country",
                                                    "children": []
                                                }
                                            ]
                                        },
                                        {
                                            "node": "PointOfServiceTypeEnum",
                                            "name": "type",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "node": "Vendor",
                                    "name": "vendor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "node": "ConsignmentEntry",
                            "name": "consignmentEntries",
                            "children": [
                                {
                                    "node": "AbstractOrderEntry",
                                    "name": "orderEntry",
                                    "children": [
                                        {
                                            "node": "Product",
                                            "name": "product",
                                            "children": [
                                                {
                                                    "node": "Media",
                                                    "name": "picture",
                                                    "children": [
                                                        {
                                                            "node": "CatalogVersion",
                                                            "name": "catalogVersion",
                                                            "children": [
                                                                {
                                                                    "node": "Catalog",
                                                                    "name": "catalog",
                                                                    "children": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "node": "CatalogVersion",
                                                    "name": "catalogVersion",
                                                    "children": [
                                                        {
                                                            "node": "Catalog",
                                                            "name": "catalog",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "node": "Category",
                                                    "name": "supercategories",
                                                    "children": [
                                                        {
                                                            "node": "CatalogVersion",
                                                            "name": "catalogVersion",
                                                            "children": [
                                                                {
                                                                    "node": "Catalog",
                                                                    "name": "catalog",
                                                                    "children": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "node": "PackagingInfo",
                            "name": "packaginginfos",
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]
}