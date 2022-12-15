using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskAssignedController : ControllerBase
    {
        private readonly CGDbContext _context;

        public TaskAssignedController(CGDbContext context)
        {
            _context = context;
        }

        // GET: api/TaskAssigned
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskAssigned>>> GetTaskAssigned()
        {
            return await _context.TaskAssigned.ToListAsync();
        }

        // GET: api/TaskAssigned/id
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskAssigned>> GetTasAssigned(int id)
        {
            var tasAssigned = await _context.TaskAssigned.FindAsync(id);

            if (tasAssigned == null)
            {
                return NotFound();
            }

            return tasAssigned;
        }

        // PUT: api/TasAssigneds/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTasAssigned(int id, TaskAssigned tasAssigned)
        {
            if (id != tasAssigned.TaskId)
            {
                return BadRequest();
            }

            _context.Entry(tasAssigned).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TasAssignedExists(id))
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

        // POST: api/TasAssigneds
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TaskAssigned>> PostTasAssigned(TaskAssigned tasAssigned)
        {
            _context.TaskAssigned.Add(tasAssigned);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTasAssigned", new { id = tasAssigned.TaskId }, tasAssigned);
        }

        // DELETE: api/TasAssigneds/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TaskAssigned>> DeleteTasAssigned(int id)
        {
            var tasAssigned = await _context.TaskAssigned.FindAsync(id);
            if (tasAssigned == null)
            {
                return NotFound();
            }

            _context.TaskAssigned.Remove(tasAssigned);
            await _context.SaveChangesAsync();

            return tasAssigned;
        }

        private bool TasAssignedExists(int id)
        {
            return _context.TaskAssigned.Any(e => e.TaskId == id);
        }
    }
}