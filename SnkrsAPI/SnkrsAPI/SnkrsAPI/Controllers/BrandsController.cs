#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SnkrsAPI.Data;
using SnkrsAPI.Models;

namespace SnkrsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly ProductDbContext _context;

        public BrandsController(ProductDbContext context)
        {
            _context = context;
        }

        // GET: api/Brands
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Brands>>> GetBrands()
        {
            return await _context.Brands.ToListAsync();
        }

        // GET: api/Brands/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Brands>> GetBrands(int id)
        {
            var brands = await _context.Brands.FindAsync(id);

            if (brands == null)
            {
                return NotFound();
            }

            return brands;
        }

        // PUT: api/Brands/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBrands(int id, Brands brands)
        {
            if (id != brands.Id)
            {
                return BadRequest();
            }

            _context.Entry(brands).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BrandsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Brands
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Brands>> PostBrands(Brands brands)
        {
            _context.Brands.Add(new Brands()
            {
                Name = brands.Name
            });
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBrands", new { id = brands.Id }, brands);
        }

        // DELETE: api/Brands/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBrands(int id)
        {
            var brands = await _context.Brands.FindAsync(id);
            if (brands == null)
            {
                return NotFound();
            }

            _context.Brands.Remove(brands);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BrandsExists(int id)
        {
            return _context.Brands.Any(e => e.Id == id);
        }
    }
}
