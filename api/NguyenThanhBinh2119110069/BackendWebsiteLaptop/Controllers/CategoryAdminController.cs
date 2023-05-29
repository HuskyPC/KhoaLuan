using BLL.Category;
using BLL.lib;
using BO.Category;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendWebsiteLaptop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryAdminController : ControllerBase
    {
        private CategoryBLL categoryBLL;
        private LibaryBLL libBLL;

        public CategoryAdminController()
        {
            libBLL = new LibaryBLL();
            categoryBLL = new CategoryBLL();
        }
        [HttpPost]
        [Route("postCreateCategory")]
        public async Task<IActionResult> postCreateCategory([FromForm] CategoryBO objCate)
        {
            if (ModelState.IsValid && objCate != null)
            {
                try
                {
                    objCate.slug = libBLL.ToUrlSlug(objCate.name);
                    //tạo categoryID
                    string cateID = libBLL.RandomString(2, false);
                    int newid = categoryBLL.newSttCategory(categoryBLL.getCategoryIDBySTT(categoryBLL.getMaxSTTCategory()));
                    objCate.categoryID = cateID + newid.ToString();
                    var result = await categoryBLL.insertCategory(objCate);
                    if (result)
                    {

                        return StatusCode(StatusCodes.Status201Created);
                    }
                    return BadRequest();
                }
                catch
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
