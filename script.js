function binarySearch(nums, target) {
// Your code here
// Return index if target is present
// else return -1
	let s=0
	let e = nums.length-1
	let ispresent =false
	while(s <= e)
		{
			let mid = Math.floor((s+e)/2)

			if(nums[mid] == target)
			{
				ispresent = true
				console.log(mid)
				break
			}
			else if(target > nums[mid])
			{
				s = mid + 1
			}
			else
			{
				end = mid -1
			}
		}
}
	return -1
module.exports = binarySearch;
