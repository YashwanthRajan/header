const job = [{id:1,isActive:true},
              {id:2,isActive:true},
              {id:3,isActive:false}];

var filtered=job.filter((jobs)=>jobs.isActive===false);
 console.log(filtered);