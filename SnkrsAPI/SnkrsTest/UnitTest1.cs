using Microsoft.EntityFrameworkCore;
using SnkrsAPI.Data;
using System;
using System.Threading.Tasks;
using Xunit;
using Microsoft.EntityFrameworkCore.InMemory;
using SnkrsAPI.Models;
using SnkrsAPI.Controllers;

namespace SnkrsTest
{
    public class UnitTest1
    {
        private async Task<ProductDbContext> GetDatabaseContext()
        {
            var options = new DbContextOptionsBuilder<ProductDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;
            var databaseContext = new ProductDbContext(options);
            databaseContext.Database.EnsureCreated();
            if (await databaseContext.Brands.CountAsync() <= 0)
            {
             
                databaseContext.Brands.Add(new Brands()
                {
                    Id = 1,
                    Name = "Nike"
                } );
                databaseContext.Brands.Add(new Brands()
                {
                    Id = 2,
                    Name = "Adidas"
                });
                await databaseContext.SaveChangesAsync();
            }
            return databaseContext;
        }
        [Fact]
        public async Task Test1()
        {
            var dbContext = await GetDatabaseContext();
            var userController = new BrandsController(dbContext);
            //Act
            var brands = await userController.GetBrands(1);
            //Assert
            Assert.NotNull(brands.Value);
            Assert.Equal(brands.Value.Name, "Nike");
        }


    }
}