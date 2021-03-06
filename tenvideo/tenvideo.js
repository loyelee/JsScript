const loyio = init()
const cookieName = '腾讯视频'
const KEY_signcookie = 'loyio_cookie_videoqq'
const KEY_loginurl = 'loyio_auth_url_videoqq'
const KEY_loginheader = 'loyio_auth_header_videoqq'
const KEY_mh5signurl = 'loyio_msign_url_videoqq'
const KEY_mh5signheader = 'loyio_msign_header_videoqq'

const signinfo = {}
const taskinfo = {}
let VAL_signcookie = loyio.getdata(KEY_signcookie)
let VAL_loginurl = loyio.getdata(KEY_loginurl)
let VAL_loginheader = loyio.getdata(KEY_loginheader)
let VAL_mh5signurl = loyio.getdata(KEY_mh5signurl)
let VAL_mh5signheader = loyio.getdata(KEY_mh5signheader)

;(sign = async () => {
  loyio.log(`🔔 ${cookieName}`)
  await login()
  await signapp()
  await signtaskdownload()
  await signtaskBarrage()
  await signtaskGift()
  await signtaskWatch()
  await getexp()
  showmsg()
  loyio.done()
})().catch((e) => loyio.log(`❌ ${cookieName} 签到失败: ${e}`), loyio.done())

function login() {
  return new Promise((resolve, reject) => {
    const url = { url: VAL_loginurl, headers: JSON.parse(VAL_loginheader) }
    loyio.get(url, (error, response, data) => {
      try {
        resolve()
      } catch (e) {
        loyio.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        loyio.log(`❌ ${cookieName} login - 登录失败: ${e}`)
        loyio.log(`❌ ${cookieName} login - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function signapp() {
  return new Promise((resolve, reject) => {
    const timestamp = Math.round(new Date().getTime() / 1000).toString()
    const VAL_signurl = `https://vip.video.qq.com/fcgi-bin/comm_cgi?name=hierarchical_task_system&cmd=2&_=${timestamp}`
    let url = { url: VAL_signurl, headers: {} }
    url.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
    loyio.get(url, (error, response, data) => {
      try {
        signinfo.signapp = JSON.parse(data.match(/\((.*)\);/)[1])
        resolve()
      } catch (e) {
        loyio.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - 签到失败: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

//下载
function signtaskdownload() {
  return new Promise((resolve, reject) => {
    const timestamp = Math.round(new Date().getTime() / 1000).toString()
    const VAL_signurl = `https://vip.video.qq.com/fcgi-bin/comm_cgi?name=spp_MissionFaHuo&cmd=4&task_id=7&_=${timestamp}`
    let url = { url: VAL_signurl, headers: {} }
    url.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
    loyio.get(url, (error, response, data) => {
      try {
        taskinfo.signapp = JSON.parse(data.match(/\((.*)\);/)[1])
        resolve()
      } catch (e) {
        loyio.msg(cookieName, `V力值活动完成结果: 失败`, `说明: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - V力值活动完成失败: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

//弹幕
function signtaskBarrage() {
  return new Promise((resolve, reject) => {
    const timestamp = Math.round(new Date().getTime() / 1000).toString()
    const VAL_signurl = `https://vip.video.qq.com/fcgi-bin/comm_cgi?name=spp_MissionFaHuo&cmd=4&task_id=3&_=${timestamp}`
    let url = { url: VAL_signurl, headers: {} }
    url.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
    loyio.get(url, (error, response, data) => {
      try {
        taskinfo.signapp = JSON.parse(data.match(/\((.*)\);/)[1])
        resolve()
      } catch (e) {
        loyio.msg(cookieName, `V力值活动完成结果: 失败`, `说明: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - V力值活动完成失败: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

//赠片
function signtaskGift() {
  return new Promise((resolve, reject) => {
    const timestamp = Math.round(new Date().getTime() / 1000).toString()
    const VAL_signurl = `https://vip.video.qq.com/fcgi-bin/comm_cgi?name=spp_MissionFaHuo&cmd=4&task_id=6&_=${timestamp}`
    let url = { url: VAL_signurl, headers: {} }
    url.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
    loyio.get(url, (error, response, data) => {
      try {
        taskinfo.signapp = JSON.parse(data.match(/\((.*)\);/)[1])
        resolve()
      } catch (e) {
        loyio.msg(cookieName, `V力值活动完成结果: 失败`, `说明: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - V力值活动完成失败: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

//60MIN
function signtaskWatch() {
  return new Promise((resolve, reject) => {
    const timestamp = Math.round(new Date().getTime() / 1000).toString()
    const VAL_signurl = `https://vip.video.qq.com/fcgi-bin/comm_cgi?name=spp_MissionFaHuo&cmd=4&task_id=1&_=${timestamp}`
    let url = { url: VAL_signurl, headers: {} }
    url.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
    loyio.get(url, (error, response, data) => {
      try {
        taskinfo.signapp = JSON.parse(data.match(/\((.*)\);/)[1])
        resolve()
      } catch (e) {
        loyio.msg(cookieName, `V力值活动完成结果: 失败`, `说明: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - V力值活动完成失败: ${e}`)
        loyio.log(`❌ ${cookieName} signapp - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function getexp() {
  return new Promise((resolve, reject) => {
    const timestamp = Math.round(new Date().getTime() / 1000).toString()
    const VAL_getexpurl = `https://vip.video.qq.com/fcgi-bin/comm_cgi?name=spp_PropertyNum&cmd=1&growth_value=1&otype=json&_=${timestamp}`
    let url = { url: VAL_getexpurl, headers: {} }
    url.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
    loyio.get(url, (error, response, data) => {
      try {
        signinfo.expinfo = JSON.parse(data.match(/\((.*)\);/)[1])
        resolve()
      } catch (e) {
        loyio.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        loyio.log(`❌ ${cookieName} getexp - 签到失败: ${e}`)
        loyio.log(`❌ ${cookieName} getexp - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function showmsg() {
  if (signinfo.signapp) {
    let subTitle, detail
    if (signinfo.signapp.ret == 0) {
      subTitle = '签到结果: 成功'
      if (signinfo.expinfo) {
        subTitle += !signinfo.signapp.checkin_score ? ' (重复签到)' : ''
        detail = `V力值: ${signinfo.expinfo.GrowthValue.num} (+${signinfo.signapp.checkin_score}), 观影券: ${signinfo.expinfo.MovieTicket.num}, 赠片资格: ${signinfo.expinfo.GiveMovie.num}`
      }
    } else if (signinfo.signapp.ret == -10006) {
      subTitle = '签到结果: 失败'
      detail = `原因: 未登录, 说明: ${signinfo.signapp.msg}`
    } else if (signinfo.signapp.ret == -10019) {
      subTitle = '签到结果: 失败'
      detail = `原因: 非会员, 说明: ${signinfo.signapp.msg}`
    } else {
      subTitle = '签到结果: 未知'
      detail = `编码: ${signinfo.signapp.ret}, 说明: ${signinfo.signapp.msg}`
    }
    loyio.msg(cookieName, subTitle, detail)
  }
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}