import { useRef, useState } from 'react'
import styles from './styles/ChatField.module.css'
import { Button, type ButtonProps } from './Button';
import { AddFileIcon, ArrowIcon, BlocksIcon, BriefcaseIcon, BulbIcon, ClipIcon, CrossIcon, FileIcon, GoogleDriveIcon, HappyMaskIcon, HourGlassIcon, LightningIcon, MicrophoneIcon, MicroscopeIcon, MoonIcon, OneDriveIcon, PaintBrushIcon, PencilIcon, RecordIcon, RocketIcon, SuperGrokTitleIcon } from "../assets/icons"
import { COLORS } from '../constants/colors';
import { useClickOutside } from '../custom hooks/useClickOutside';
import { ModelButton } from './ModelButton';

const SubMenuButton = (props: ButtonProps) => {
  return (
    <Button
      icon={props.icon}
      title={props.title}
      additionalIcon={<ArrowIcon 
        size={14} 
        style={{transform:' rotate(-90deg)', color: 'var(--colors-ghost)', strokeWidth: 1}}/>}
      className={styles.hoverableSubMenuBtn}
      style={props.style}
    />
  )
}

interface ChatFieldProps {
  deepSearchClicked: boolean;
  onClose: () => void;
}

export const ChatField = ({ deepSearchClicked, onClose }: ChatFieldProps) => {
  const [ isAttachmentBtnClicked, setAttachmentBtnClicked ] = useState(false);
  const [ waveHovered, setWaveHovered ] = useState(false);
  const [ showChatModels, setShowChatModels ] = useState(false);
  const [ activeModel, setActiveModel ] = useState<string>('Auto');
  const [ activeIcon, setActiveIcon ] = useState<React.ReactNode>(<RocketIcon/>);

  const attachmentMenuRef = useRef<HTMLDivElement>(null);
  const modelMenuRef = useRef<HTMLDivElement>(null);
  const attachmentButtonRef = useRef<HTMLButtonElement>(null);
  const modelButtonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(attachmentMenuRef, attachmentButtonRef, () => {setAttachmentBtnClicked(false)});
  useClickOutside(modelMenuRef, modelButtonRef, () => {setShowChatModels(false)});

  const modelData = [
    {
      id: "auto",
      title: "Auto",
      desc: "Chooses Fast or Expert",
      icon: <RocketIcon />
    },
    {
      id: "fast",
      title: "Fast",
      desc: "Quick Response by 4.1",
      icon: <LightningIcon />
    },
    {
      id: "expert",
      title: "Expert",
      desc: "Thinks Hard",
      icon: <BulbIcon />
    },
    {
      id: "grok",
      title: "Grok 4.20 (Beta)",
      desc: "4 Agents",
      icon: <MoonIcon />
    },
    {
      id: "heavy",
      title: "Heavy",
      desc: "Team of Experts",
      icon: <BlocksIcon />
    }
  ];

  const barHeights = ['0.4rem', '0.8rem', '1.2rem', '0.7rem', '1rem', '0.4rem'];
  const subMenuStyle = { 
    cursor: 'not-allowed',
    '--hover-no-bg': 'transparent',
    color: COLORS.ghost,
  };
  const attachmentBtnStyle = {padding: "12px 10px"}

  const showChatDetails = deepSearchClicked;

  return (
    <div className={styles.chatContainer}>
      { showChatDetails && <div className={styles.chatDetailsContainer}>
        { deepSearchClicked && <button className={styles.deepSearchBtn}>
          <MicroscopeIcon size={22}  stroke='#4db6a8'/>
          DeepSearch
          <button className={styles.crossBtn} onClick={onClose}>
            <CrossIcon size={16}/>
          </button>
        </button>}
      </div>}

      <div className={styles.chatFieldContainer}>
        <div style={{ position: 'relative', display: 'inline-flex' }}>
          <button className={styles.chatAttachments} ref={attachmentButtonRef} onClick={() => setAttachmentBtnClicked(!isAttachmentBtnClicked)}>
            <ClipIcon size={18}/>
            {!isAttachmentBtnClicked && <div className={styles.chatAttachmentsDesc}>Attach</div>}
          </button>
          {isAttachmentBtnClicked &&
            <div className={styles.dropdownMenuContainer} ref={attachmentMenuRef}>
              <Button icon={<AddFileIcon size={16} stroke={COLORS.ghost}/>} title="Upload a file" style={attachmentBtnStyle}/>
              <Button icon={<PencilIcon size={16} stroke={COLORS.ghost}/>} title="Add text context" style={attachmentBtnStyle}/>
              <Button icon={<PaintBrushIcon size={16} stroke={COLORS.ghost}/>} title="Draw a sketch" style={attachmentBtnStyle}/>
              <Button icon={<GoogleDriveIcon size={16}/>} title="Connect Google Drive" style={attachmentBtnStyle}/>
              <Button icon={<OneDriveIcon size={16}/>} title="Connect Microsoft OneDrive" style={attachmentBtnStyle}/>
              <div style={{ position: 'relative', width: '100%'}}>
                <SubMenuButton icon={<RecordIcon size={16} stroke={COLORS.ghost}/>} title="Recent" style={attachmentBtnStyle}/>
                <div className={styles.subMenuContainer}>
                  <Button title='No recent files' style={subMenuStyle}/>
                </div>
              </div>
              <div style={{ position: 'relative', width: '100%'}}>
                <SubMenuButton icon={<FileIcon size={16} stroke={COLORS.ghost }/>} title="Projects" style={attachmentBtnStyle}/>
                <div className={styles.subMenuContainer}>
                  <Button icon={<HourGlassIcon size={16} stroke={COLORS.gold01} />} title={"Storyteller"}/>
                  <Button icon={<BriefcaseIcon size={16} stroke={COLORS.ghost} />} title={"Lawyer"}/>
                </div>
              </div>
            </div>}
        </div>
        <input type="text" name="Chat Field" className={styles.chatInput} placeholder='How can I help you today?'/>
        <button className={styles.chatModelBtn} style={showChatModels ? {backgroundColor: COLORS.gray02} : undefined} ref={modelButtonRef} onClick={() => setShowChatModels(!showChatModels)}>
          { activeIcon }
          <span className={styles.chatModelText}>{activeModel}</span>
          <span style={{transform: `rotate(${showChatModels ? 180 : 0}deg)`, transition: "transform 0.2s ease", display: "flex"}}><ArrowIcon /></span>
          {showChatModels &&
            <div className={styles.chatModelContainerWrapper} ref={modelMenuRef}>
              <div className={styles.chatModelContainer}>
                {modelData.map((model) => (
                  <ModelButton
                    key={model.id}
                    icon={model.icon}
                    title={model.title}
                    desc={model.desc}
                    isActive={activeModel === model.title}
                    onClick={() => {setActiveModel(model.title); setActiveIcon(model.icon)}}
                  />
                ))}
                <button className={styles.upgradeSuperGrokBtn}>
                  <div className={styles.upgradeSuperGrokTextContainer  }>
                    <SuperGrokTitleIcon width={110} height={28}/>
                    <span className={styles.upgradeSuperGrokText}>Unlock extended capabilities</span>
                  </div>
                  <button className={styles.upgradeSuperGrokFreeBtn}>Try Free</button>
                </button>
        
                <ModelButton icon={<HappyMaskIcon/>} title="Custom Instructions" desc="Not set" onClick={() => {setActiveModel("Custom"); setActiveIcon(<HappyMaskIcon/>)}}/>
              </div>
            </div>
          }
        </button>
        <button className={styles.dictationBtn}>
          <MicrophoneIcon/>
          <span className={styles.dictationTooltip}>Start Dictation (Ctrl+D)</span>
        </button>
        
        <button className={styles.audioWaveContainer} onMouseOver={() => setWaveHovered(true)} onMouseOut={() => setWaveHovered(false)}>
            {barHeights.map((height, index) => (
              <div
                key={index}
                className={`${styles.waveBar} ${waveHovered ? styles.waveAnimation : ''}`}
                style={{ height }}
              />
            ))}
            {waveHovered && <div className={styles.audioWaveDesc}>Enter voice mode</div>}
        </button>
      </div>

    </div>
  )
}
