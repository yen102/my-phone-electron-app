export default function decodeArray(buffer) {
    console.log('--------------decodeArray')
    var mime;
    var a = new Uint8Array(buffer);
    var nb = a.length;
    if (nb < 4)
        return null;
    var b0 = a[0];
    var b1 = a[1];
    var b2 = a[2];
    var b3 = a[3];
    if (b0 === 0x89 && b1 === 0x50 && b2 === 0x4E && b3 === 0x47)
        mime = 'image/png';
    else if (b0 === 0xff && b1 === 0xd8)
        mime = 'image/jpeg';
    else if (b0 === 0x47 && b1 === 0x49 && b2 === 0x46)
        mime = 'image/gif';
    else
        return null;
    var binary = "";
    for (var i = 0; i < nb; i++)
        binary += String.fromCharCode(a[i]);
    var base64 = window.btoa(binary);
    var image = new Image();
    image.src = 'data:' + mime + ';base64,' + base64;
    console.log('image', image.src)
    return image;
}