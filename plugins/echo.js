import Echo from 'laravel-echo';
window.Pusher=require('pusher-js');
export default (_,inject)=>{
  const echo=new Echo({
    broadcaster:'pusher',
    key:'local',
    wsHost:window.location.hostname,
    wsPort:6001,
    forceTLS:false,
    disableState:true
  })
  inject('echo', echo)
}
