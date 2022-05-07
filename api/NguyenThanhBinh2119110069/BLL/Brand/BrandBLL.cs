using BLL.Product;
using BO.Brand;
using BO.Product;
using DAL.Brand;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Brand
{
    public class BrandBLL
    {
        private BrandDAL brandDAL;
        public BrandBLL()
        {
            brandDAL = new BrandDAL();

        }
        public List<BrandBO> getBrandSuggestion()
        {

            List<BrandBO> listProduct = brandDAL.getBrandSuggestion();
            return listProduct;
        }
        public List<BrandBO> getBrandIDandParentID(string parentID)
        {


            List<BrandBO> listProduct = brandDAL.getParentByBrandId(parentID);
            return listProduct;
        }
        public List<BrandBO> getBrandIDandParentID()
        {

            List<BrandBO> listBrand = brandDAL.getBrandIDandParentID();

            ProductBLL objProduct = new ProductBLL();
            List<ProductBO> listProductBO = objProduct.getProductAll();

            BrandBLL objParentByBrandId = new BrandBLL();
            List<BrandBO> listParentByBrandId = objParentByBrandId.getBrandIDandParentID("0");

            ProductBLL objProductByBrandID = new ProductBLL();

            for (int b = 0; b < listParentByBrandId.Count; b++)
            {
                listParentByBrandId[b].productBo = new List<ProductBO>();
                for (int i = 0; i < listBrand.Count(); i++)
                {
                    if (listParentByBrandId[b].brandID == listBrand[i].parentID)
                    {
                        List<ProductBO> listProductByrandID = objProductByBrandID.getProductByBrandID(listBrand[i].brandID);

                        if (listProductByrandID.Count != 0)
                        {
                            //if (listParentByBrandId[b].productBo.Count > 0)
                            //{

                            //    listParentByBrandId[b].productBo.AddRange(listProductByrandID);
                            //}
                            //else
                            //{
                            //    listParentByBrandId[b].productBo = listProductByrandID;
                            //}
                            if (listParentByBrandId[b].productBo.Count == 0)
                            {
                                listParentByBrandId[b].productBo = listProductByrandID;

                            }
                            else listParentByBrandId[b].productBo.AddRange(listProductByrandID);
                        }
                    }

                }
            }

            return listParentByBrandId;
        }

    }
}
