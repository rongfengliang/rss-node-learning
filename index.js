var RSS = require('rss');
var fs = require("fs")
var feed = new RSS({
    title: 'paas平台设计规划',
    description: '基于docker 平台设计- 支撑服务',
    feed_url: 'http://feed.cnblogs.com/blog/u/161986/rss',
    site_url: 'http://cnblogs.com/rongfengliang',
    image_url: 'http://cnblogs.com/rongfengliang',
    docs: 'http://cnblogs.com/rongfengliang',
    managingEditor: 'dalongrong',
    webMaster: 'Dylan Greene',
    copyright: '2013 dalongrong',
    language: 'en',
    categories: ['Category 1','Category 2','Category 3'],
    pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: '60',
    custom_namespaces: {
      'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
      {'itunes:subtitle': 'A show about everything'},
      {'itunes:author': 'John Doe'},
      {'itunes:summary': 'All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store'},
      {'itunes:owner': [
        {'itunes:name': 'John Doe'},
        {'itunes:email': 'john.doe@example.com'}
      ]},
      {'itunes:image': {
        _attr: {
          href: 'http://example.com/podcasts/everything/AllAboutEverything.jpg'
        }
      }},
      {'itunes:category': [
        {_attr: {
          text: 'Technology'
        }},
        {'itunes:category': {
          _attr: {
            text: 'Gadgets'
          }
        }}
      ]}
    ]
});
 
/* loop over data and add to feed */
feed.item({
    title:  '荣锋亮',
    description: 'use this for the content. It can include html.',
    url: 'http://cnblogs.com/rongfengliang', // link to the item
    guid: '1123', // optional - defaults to url
    categories: ['Category 1','Category 2','Category 3','Category 4'], // optional - array of item categories
    author: 'Guest Author', // optional - defaults to feed author property
    date: 'May 27, 2012', // any format that js Date can parse.
    lat: 33.417974, //optional latitude field for GeoRSS
    long: -111.933231, //optional longitude field for GeoRSS
   // enclosure: {url:'...', file:'path-to-file'}, // optional enclosure
    custom_elements: [
      {'itunes:author': 'John Doe'},
      {'itunes:subtitle': 'A short primer on table spices'},
      {'itunes:image': {
        _attr: {
          href: 'http://example.com/podcasts/everything/AllAboutEverything/Episode1.jpg'
        }
      }},
      {'itunes:duration': '7:04'}
    ]
});
 
// cache the xml to send to clients
var xml = feed.xml();
console.log(xml)
console.log(__dirname)
fs.writeFileSync("rss.xml",xml,(err)=>{
  console.log(err)
})
