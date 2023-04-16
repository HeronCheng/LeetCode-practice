// 2621. Sleep
// Easy
// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(resolve => {
          setTimeout(() => {
              resolve(millis)
        }, millis);
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
