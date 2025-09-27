export function withResource(resource, callback) {
  try {
    callback(resource);
  } finally {
    resource.close();
  }
}

/***************************************************/
class Resource {
  doA() {console.log('doA');}
  doB() {console.log('doB');}
  close() {console.log('close');}
}

const resource = new Resource(...);
resource.doA();
resource.doB();
resource.close(); // これを忘れるとリソースがリークする
