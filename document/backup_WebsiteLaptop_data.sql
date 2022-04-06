USE [WebsiteLaptop]
GO
SET IDENTITY_INSERT [dbo].[Brand] ON 

INSERT [dbo].[Brand] ([id], [brandID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (1, N'AP5', N'Latop Apple ', N'Apple-logo.png', N'/assets/images/category/logo/AP5', N'laptop-apple', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Brand] ([id], [brandID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (2, N'AS1', N'Laptop Asus', N'logo-asus.png', N'/assets/images/category/logo/AS1', N'laptop-asus', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Brand] ([id], [brandID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (3, N'DE2', N'Latop Dell', N'logo-dell.jpg', N'/assets/images/category/logo/DE2', N'laptop-dell', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Brand] ([id], [brandID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (4, N'HP4', N'Laptop HP', N'logo-hp.png', N'/assets/images/category/logo/HP4', N'laptop-hp', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Brand] ([id], [brandID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (5, N'LE3', N'Laptop Lennovo', N'logo-lenovo.png', N'/assets/images/category/logo/LE3', N'laptop-lenovo', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Brand] OFF
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (1, N'MP1', N'MacBook Pro', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (2, N'MA2', N'Macbook Air ', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (3, N'ZK3', N'ASUS Zenbook', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (4, N'VB4', N'ASUS Viobook', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (5, N'RG5', N'ASUS ROG', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (6, N'PR6', N'ASUS Pro', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (7, N'CB7', N'ASUS Chromebook', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (8, N'IN8', N'DELL Inspiron', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (9, N'VO9', N'DELL Vostro', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (10, N'XP10', N'DELL XPS', N'nullnull', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (11, N'AW11', N'DELL Alienwere', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (12, N'PS12', N'DELL Precision ', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (13, N'LT13', N'DELL Latitude', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (14, N'PB14', N'HP Probook ', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (15, N'EB15', N'HP Elitebook ', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (16, N'EV16', N'HP Envy', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (17, N'PL17', N'HP Pavion', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (18, N'ZB18', N'HP Zbook', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (19, N'NB19', N'HP Notebook', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (20, N'OM20', N'HP OMEN', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (21, N'GL21', N'LENOVO Gaming Legion', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (22, N'IP22', N'LENOVO IdeaPad', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (23, N'TP23', N'LENOVO ThinkPad ', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Category] ([id], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (24, N'ET24', N'LENOVO Essential', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Category] OFF
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM1', N'macbook-pro-14-m1-pro-2021-bac-2.jpg', N'/assets/images/products/laptop/AP5/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM10', N'macbook-pro-14-m1-pro-2021-bac-3.jpg', N'/assets/images/products/laptop/AP5/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM11', N'macbook-pro-14-m1-pro-2021-bac-4.jpg', N'/assets/images/products/laptop/AP5/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM12', N'macbook-pro-14-m1-pro-2021-bac-5.jpg', N'/assets/images/products/laptop/AP5/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM13', N'apple-macbook-pro-m1-2020-z11b000ct-1-org.jpg', N'/assets/images/products/laptop/AP5/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM14', N'apple-macbook-pro-m1-2020-z11b000ct-2-org.jpg', N'/assets/images/products/laptop/AP5/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM15', N'apple-macbook-pro-m1-2020-z11b000ct-3-org.jpg', N'/assets/images/products/laptop/AP5/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM16', N'asus-zenbook-ux425ea-i5-ki839w-4.jpg', N'/assets/images/products/laptop/AS1/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM17', N'dell-inspiron-15-5515-r7-n5r75700u104w1-2.jpg', N'/assets/images/products/laptop/DE2/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM18', N'dell-inspiron-15-5515-r7-n5r75700u104w1-3.jpg', N'/assets/images/products/laptop/DE2/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM19', N'dell-xps-17-9710-i7-xps7i7001w1-01.jpg', N'/assets/images/products/laptop/DE2/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM2', N'apple-macbook-pro-m1-2020-z11b000ct-4-180x125.jpg', N'/assets/images/products/laptop/AP5/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM20', N'dell-xps-17-9710-i7-xps7i7001w1-02.jpg', N'/assets/images/products/laptop/DE2/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM21', N'dell-xps-13-9310-i5-70273578-1.jpg', N'/assets/images/products/laptop/DE2/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM22', N'dell-xps-13-9310-i5-70273578-2.jpg', N'/assets/images/products/laptop/DE2/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM23', N'dell-xps-13-9310-i5-70273578-3.jpg', N'/assets/images/products/laptop/DE2/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM24', N'dell-xps-13-9310-i5-70273578-13.jpg', N'/assets/images/products/laptop/DE2/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM25', N'hp-15s-du1108tu-i3-10110u-2z6l7pa-1.jpg', N'/assets/images/products/laptop/HP4/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM26', N'hp-15s-du1108tu-i3-10110u-2z6l7pa-2.jpg', N'/assets/images/products/laptop/HP4/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM27', N'hp-15s-du1108tu-i3-10110u-2z6l7pa-3.jpg', N'/assets/images/products/laptop/HP4/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM28', N'hp-15s-du1108tu-i3-10110u-2z6l7pa-4.jpg', N'/assets/images/products/laptop/HP4/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM29', N'hp-zbook-firefly-14-g8-i5-275v5av-1 (1).jpg', N'/assets/images/products/laptop/HP4/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM3', N'asus-vivobook-a415ea-i3-eb1748w-1.jpg', N'/assets/images/products/laptop/AS1/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM30', N'hp-zbook-firefly-14-g8-i5-275v5av-2.jpg', N'/assets/images/products/laptop/HP4/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM31', N'hp-zbook-firefly-14-g8-i5-275v5av-4.jpg', N'/assets/images/products/laptop/HP4/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM32', N'hp-zbook-firefly-14-g8-i5-275v5av-5.jpg', N'/assets/images/products/laptop/HP4/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM33', N'lenovo-ideapad-5-15itl05-i5-82fg01h7vn-1-1.jpg', N'/assets/images/products/laptop/LE3/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM34', N'lenovo-ideapad-5-15itl05-i5-82fg01h7vn-2-1.jpg', N'/assets/images/products/laptop/LE3/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM35', N'lenovo-ideapad-5-15itl05-i5-82fg01h7vn-3-1.jpg', N'/assets/images/products/laptop/LE3/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM36', N'lenovo-ideapad-5-15itl05-i5-82fg01h7vn-4.jpg', N'/assets/images/products/laptop/LE3/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM37', N'thinkbook-14p-g2-ach-r5-20yn001hvn-1-2.jpg', N'/assets/images/products/laptop/LE3/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM38', N'thinkbook-14p-g2-ach-r5-20yn001hvn-2-2.jpg', N'/assets/images/products/laptop/LE3/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM39', N'thinkbook-14p-g2-ach-r5-20yn001hvn-3-2.jpg', N'/assets/images/products/laptop/LE3/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM4', N'asus-vivobook-a415ea-i3-eb1748w-2.jpg', N'/assets/images/products/laptop/AS1/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM40', N'thinkbook-14p-g2-ach-r5-20yn001hvn-4-2.jpg', N'/assets/images/products/laptop/LE3/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM5', N'asus-vivobook-a415ea-i3-eb1748w-3.jpg', N'/assets/images/products/laptop/AS1/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM6', N'asus-vivobook-a415ea-i3-eb1748w-4.jpg', N'/assets/images/products/laptop/AS1/product1/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM7', N'asus-zenbook-ux425ea-i5-ki839w-1.jpg', N'/assets/images/products/laptop/AS1/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM8', N'asus-zenbook-ux425ea-i5-ki839w-2.jpg', N'/assets/images/products/laptop/AS1/product2/detail', NULL)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM9', N'asus-zenbook-ux425ea-i5-ki839w-3.jpg', N'/assets/images/products/laptop/AS1/product2/detail', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM1', N'SP10', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM10', N'SP10', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM11', N'SP10', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM12', N'SP10', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM13', N'SP5', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM14', N'SP5', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM15', N'SP5', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM16', N'SP6', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM17', N'SP2', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM18', N'SP2', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM19', N'SP2', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM2', N'SP5', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM20', N'SP2', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM21', N'SP7', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM22', N'SP7', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM23', N'SP7', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM24', N'SP7', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM25', N'SP4', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM26', N'SP4', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM27', N'SP4', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM28', N'SP4', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM29', N'SP8', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM3', N'SP1', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM30', N'SP8', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM31', N'SP8', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM32', N'SP8', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM33', N'SP3', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM34', N'SP3', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM35', N'SP3', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM36', N'SP3', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM37', N'SP9', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM38', N'SP9', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM39', N'SP9', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM4', N'SP1', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM40', N'SP9', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM5', N'SP1', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM6', N'SP1', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM7', N'SP6', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM8', N'SP6', NULL)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM9', N'SP6', NULL)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP1', N'Sản phẩm 1', N'AS1', 20000000, 0, N'asus-vivobook-a415ea-i3-eb1748w-2.jpg', N'/assets/images/products/laptop/AS1/product1', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP10', N'Sản phẩm 10', N'AP5', 100000000, 95000000, N'macbook-pro-14-m1-pro-2021-bac-1.jpg', N'/assets/images/products/laptop/AP5/product1', N'null', N'nullnull', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP11', N'Sản phẩm 11', N'AS1', 23000000, 19500000, N'null', N'null', N'null', N'null', N'nullnull', 0, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP2', N'Sản phẩm 2', N'DE2', 25000000, 24500000, N'dell-inspiron-15-5515-r7-n5r75700u104w1-1.jpg', N'/assets/images/products/laptop/DE2/product1', N'nullnull', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP3', N'Sản phẩm 3', N'LE3', 30000000, 29900000, N'lenovo-ideapad-5-15itl05-i5-82fg01h7vn-3-1.jpg', N'/assets/images/products/laptop/LE3/product1', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP4', N'Sản phẩm 4', N'HP4', 40000000, 35000000, N'hp-15s-du1108tu-i3-10110u-2z6l7pa-3 (1).jpg', N'/assets/images/products/laptop/HP4/product1', N'null', N'null', N'nullnull', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP5', N'Sản phẩm 5', N'AP5', 50000000, 45000000, N'apple-macbook-pro-m1-2020-z11b000ct-1-org.jpg', N'/assets/images/products/laptop/AP5/product2', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP6', N'Sản phẩm 6', N'AS1', 10000000, 0, N'asus-zenbook-ux425ea-i5-ki839w-2.jpg', N'/assets/images/products/laptop/AS1/product2', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP7', N'Sản phẩm 7', N'DE2', 15000000, 14500000, N'dell-xps-13-9310-i5-70273578-3.jpg', N'/assets/images/products/laptop/DE2/product2', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP8', N'Sản phẩm 8', N'HP4', 5000000, 4500000, N'hp-zbook-firefly-14-g8-i5-275v5av-1.jpg', N'/assets/images/products/laptop/HP4/product2', N'null', N'null', N'nullnull', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Product] ([ProductID], [name], [CategoryID], [price], [priceSale], [avatar], [urlImage], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (N'SP9', N'Sản phẩm 9', N'LE3', 2000000, 1900000, N'thinkbook-14p-g2-ach-r5-20yn001hvn-13.jpg', N'/assets/images/products/laptop/LE3/product2', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
