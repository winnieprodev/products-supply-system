import {
  IconProp,
  library as iconLibrary,
} from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faBoxOpen,
  faCloudShowersHeavy,
  faEdit,
  faEnvelope,
  faExclamationTriangle,
  faHouseUser,
  faMinus,
  faPhone,
  faPlus,
  faSadTear,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React } from "@ungap/global-this";

iconLibrary.add(
  faAngleRight,
  faBoxOpen,
  faCloudShowersHeavy,
  faEdit,
  faEnvelope,
  faExclamationTriangle,
  faHouseUser,
  faMinus,
  faPhone,
  faPlus,
  faSadTear,
  faTimes,
  faTrash,
);

interface IconProps {
  className?: string;
}

const getIcon = (icon: IconProp): React.FC<IconProps> => {
  const render = ({ className }: IconProps) => (
    <FontAwesomeIcon icon={icon} className={className} />
  );
  render.displayName = `icon_${icon}`;

  return render;
};

export const ArrowRightIcon = getIcon("angle-right");
export const CloseIcon = getIcon("times");
export const EditIcon = getIcon("edit");
export const EnvelopeIcon = getIcon("envelope");
export const ErrorIcon = getIcon("cloud-showers-heavy");
export const GenericProductIcon = getIcon("box-open");
export const MinusIcon = getIcon("minus");
export const OutletIcon = getIcon("house-user");
export const PhoneIcon = getIcon("phone");
export const PlusIcon = getIcon("plus");
export const SadIcon = getIcon("sad-tear");
export const SearchIcon = getIcon("search");
export const TrashIcon = getIcon("trash");
export const WarningIcon = getIcon("exclamation-triangle");
