import S3 from 'aws-sdk/clients/s3';
import uuid from 'uuid';

const config = {
	// dev
  accessKeyId: '',
  secretAccessKey: '',
  endpoint: 'http://s3-ap-northeast-1.amazonaws.com',
  params: {Bucket: '', apiVersion: '' }
};

export function uploadFile(path, file, callbackFunc) {
  const bucket = new S3(config);
  const nameArray = file.name.split('.');
  const filename = uuid.v4();
  const type = nameArray[nameArray.length - 1];
  const _path = (path) || 'temp';
  const params = {
    Key: `${_path}/${filename}_${file.name}`,
    ContentType: file.type || type,
    Body: file
  };

  bucket.upload(params, (err, data) => {
    if (!err) {
      data.progress = 100;
    }
    callbackFunc(err || data);
  }).on('httpUploadProgress', (e) => {
    const done = e.position || e.loaded;
    const total = e.totalSize || e.total;
    callbackFunc({progress: Math.round(done / total * 100)});
  });
}

export function deleteFile(fileName, callbackFunc) {
  const bucket = new S3(config);

  const params = {
    Key: fileName
  };

  bucket.deleteObject(params, (err, data) => {
    callbackFunc(err || data);
  });
}

export function getFile(fileName, callbackFunc) {
  const bucket = new S3(config);

  const params = {
    Key: fileName
  };

  bucket.getObject(params, (err, data) => {
    callbackFunc(err || data);
  });
}
