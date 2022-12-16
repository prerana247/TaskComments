﻿using System;
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
    public class TaskAssignedsController : ControllerBase
    {
        private readonly CGDbContext _context;

        public TaskAssignedsController(CGDbContext context)
        {
            _context = context;
        }

        // GET: api/TaskAssigneds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskAssigned>>> GetTaskAssigned()
        {
            return await _context.TaskAssigned.ToListAsync();
        }

        // GET: api/TaskAssigneds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskAssigned>> GetTaskAssigned(int id)
        {
            var taskAssigned = await _context.TaskAssigned.FindAsync(id);

            if (taskAssigned == null)
            {
                return NotFound();
            }

            return taskAssigned;
        }

        // PUT: api/TaskAssigneds/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskAssigned(int id, TaskAssigned taskAssigned)
        {
            if (id != taskAssigned.TaskAssignedId)
            {
                return BadRequest();
            }

            _context.Entry(taskAssigned).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskAssignedExists(id))
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

        // POST: api/TaskAssigneds
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TaskAssigned>> PostTaskAssigned(TaskAssigned taskAssigned)
        {
            _context.TaskAssigned.Add(taskAssigned);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaskAssigned", new { id = taskAssigned.TaskAssignedId }, taskAssigned);
        }

        // DELETE: api/TaskAssigneds/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TaskAssigned>> DeleteTaskAssigned(int id)
        {
            var taskAssigned = await _context.TaskAssigned.FindAsync(id);
            if (taskAssigned == null)
            {
                return NotFound();
            }

            _context.TaskAssigned.Remove(taskAssigned);
            await _context.SaveChangesAsync();

            return taskAssigned;
        }

        private bool TaskAssignedExists(int id)
        {
            return _context.TaskAssigned.Any(e => e.TaskAssignedId == id);
        }
    }
}
