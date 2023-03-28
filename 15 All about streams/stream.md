# Streams
+ Streams are used to handle streaming data in node.js

## Types of streams
1. **Readable stream :** The streams which is used to perform read operations are readable streams.
2. **Writable stream :** The streams which is used to perform write operations are writable streams.
3. **Duplex stream :** Duplex streams are the streams which implements both readable and writable stream.
4. **Transform stream :** Transform streams are duplex streams that can transform or modify data as it is read and written.


## Readable stream
### Modes : These are the two modes of readables
  1. **paused :** If the readable is in paused mode, then we need to call stream.read() explicitly to read the chunks of data.
  2. **flowing  :** If the readable is in flowing mode, then the data is successfully emitted.

### Events :
  + **readable :** This event is fired when there is data available to be read from the stream.
  + **data :** This event is fired when the stream is vacating the ownership of the  chunk of data to the consumer.
  + **error :** This event is fired when the stream is unable to generate data due  to some internal error or when stream tries to push invalid chunk of data.
  + **close :** This event is fired when the stream is closed. It indicates that no  more events will be emitted and no further computation will occur.
  + **end :** This event is fired when all the data is read. It indicates that there  is no more data to be consumed.  

### Methods :
  + **readable.pause() :** This method is used to change the mode of the stream from flowing to paused .
  + **readable.resume() :** This method is used to change the mode of the stream from paused to flowing .
  + **readable.isPaused() :** This method is used to check the current operating state of the readable stream. If it returns true then that signifies that readable stream is in paused mode.
  + **readable.pipe() :** This method is used to attach a writable stream to the readable which will make the stream switch to flowing mode and start pushing data to the attached writable.
  + **readable.unpipe() :** This method is used to detach the writable stream previously attached to the readable stream.
  + **readable.read() :** This method is used to pull the data out of the internal buffer where data is returned in the form of buffers unless any other format is specified using readable.setEncoding() . If there is no data to pull , then null is returned.
  + **readable.setEncoding() :** This method is used to set the encoding for readable stream. By default the data is pulled in the form of buffers.
  + **readable.unshift() :** This method is used to push the data back to the internal buffer.
  + **readable.wrap() :** This method is used to read the data from the readable where the data sources uses the old streams.
  + **readable.destroy() :** This method is used to signifies the end of readable stream and stream releases any resources , if held.


## Writable stream
### Events :
  + **drain :** This event is fired when a call to system.write(chunk) method returns false and it indicates when it will be appropriate to resume writing data.
  + **pipe :** This event is fired when stream.pipe() method is called on a readable stream indicating the addition of the writable in the set of destinations of the readable.
  + **unpipe :** This event is fired when stream.unpipe() method is called on a readable stream indicating the removal of the writable from the set of destinations of the readable.
  + **error :** This event is fired when an error occurred while writing or piping the data.
  + **close :** This event is fired when the stream is closed. It indicates that no more events will be emitted and no further computation will occur.
  + **finish :** This event is fired when all the data is successfully flushed.

### Methods :  
  + **writable.cork() :** This method is used to force all the written data to be buffered in memory.
  + **writable.uncork() :** This method is used to flush all the data buffered by stream.cork() method.
  + **writable.write() :** This method is used to write some data to the stream and call the given callback when the data is handled successfully.
  + **writable.setDefaultEncoding() :** This method is used to set the default encoding for the writable stream.
  + **writable.end() :** This method is used to signifies that no more data will be written to the writable stream.
  + **writable.destroy() :** This method is used to signifies the end of writable stream.

  
