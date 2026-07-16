import React from 'react'
import items1 from '../../assets/items1.png'

interface Section1Props {
  onScrollToNext: () => void
}

export const Section1: React.FC<Section1Props> = ({ onScrollToNext }) => {
  return (
    <section className="w-full min-h-dvh flex flex-col items-center justify-center bg-white py-6 px-4 relative">
      <div className="max-w-4xl w-full flex flex-col items-center space-y-4 text-center z-10 animate-fade-in">
        {/* Rings Image Icon */}
        <img
          src={items1}
          alt="Rings"
          className="w-20 h-20 object-contain mb-8"
        />

        {/* Heading */}
        <p className="text-xl md:text-2xl font-light text-primary tracking-wide leading-relaxed max-w-[40ch] font-['Montserrat'] mb-20">
          Anh rất vui khi tới bây giờ mình có thể tiếp tục đi cùng nhau!
        </p>

        {/* Welcome Description */}
        <p className="font-['Montserrat'] py-4 font-medium text-base text-accent-text/80 leading-loose max-w-[58ch] text-justify mb-10 md:mb-12">
          Ty yêu dấu ơi, <br /> <br />
          Mỗi lần anh nói "Anh yêu em", anh thấy nó khá là chật chội và bất lực
          quá ấy. Ba từ đó làm sao kể được mỗi lần anh hạnh phúc khi bạn bè anh
          hay ai đó vô tình nhắc đến tên em. Làm sao gói cho vừa cái vừa xôn xao
          rộn ràng mỗi lần anh nhớ dáng vẻ em chăm chỉ, em cố gắng từng ngày
          theo đuổi mục tiêu của mình đề ra chứ. <br />
          <br /> Anh thích em không vì gì cả, ngay từ lúc vừa mới yêu, anh không
          yêu em vì vẻ hào nhoáng ở bên ngoài, hay là một mục đích gì cả. Đơn
          giản vì anh yêu em vậy thôi. Anh yêu vì mỗi lần thấy má em không hồng
          nè, môi không đỏ, tóc tai thì rũ rượu vì áp lực ở bên ngoài kia. Anh
          muốn ôm em lâu thật lâu, để em thấy rằng có thể em là một phần của thế
          giới, nhưng lại là cả thế giới đối với anh.
          <br />
          <br />
          Sau tất cả mọi chuyện gần đây. Anh không mong đòi hỏi gì lớn cả. Anh
          muốn em bình an, anh không muốn em vì anh mà phải suy nghĩ nhiều, cho
          anh xin lỗi nhé.
          <br />
          <br />
          Cảm ơn em vì đã đến, cho đời anh thêm một tí màu sắc. <br /> <br />
          Tháng năm rộng rài, thế giới nhỏ vừa bằng vòng tay ôm.
        </p>

        {/* Signatures */}
        <div className="w-full max-w-[62ch] flex flex-col items-end text-right mb-10">
          <span className="font-['Dancing_Script'] text-xl text-primary/60">
            With love,
          </span>
          <span className="font-['Dancing_Script'] text-3xl text-primary font-medium">
            Hồng Sơn
          </span>
        </div>
      </div>
    </section>
  )
}
