import mapMarkerImg from '../images/icon-location.svg';
import LeafLet from 'leaflet';

const locationIcon = LeafLet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default locationIcon;
