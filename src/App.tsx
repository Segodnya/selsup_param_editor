import React from 'react';
import './App.css';

// Определение интерфейса Param, который описывает структуру параметра товара
interface Param {
  id: number;
  name: string;
  type: 'string';
}

// Определение интерфейса ParamValue, который описывает значения параметров товара
interface ParamValue {
  paramId: number;
  value: string;
}

// Определение интерфейса Model, который описывает структуру товара
interface Model {
  paramValues: ParamValue[];
}

// Определение Props для компонента ParamEditor, который принимает параметры и модель
interface Props {
  params: Param[];
  model: Model;
}

// Определение State для компонента ParamEditor, который хранит отредактированные параметры
interface State {
  editedParams: ParamValue[];
}

/**
 * Классовый компонент ParamEditor, который позволяет редактировать структуру Model
 * и получить полную структуру в методе getModel()
 * @param {Param[]} props.params - Массив параметров товара
 * @param {Model} props.model - Модель товара
 */
class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // Инициализация состояния с отредактированными параметрами из модели товара
      editedParams: props.model.paramValues.slice(),
    };
  }

  // Обработчик изменения значения параметра
  handleParamChange = (paramId: number, value: string) => {
    this.setState((prevState) => {
      const editedParams = prevState.editedParams.map((param) => {
        if (param.paramId === paramId) {
          return { ...param, value };
        }
        return param;
      });
      return { editedParams };
    });
  };

  // Метод для получения полной структуры Model с отредактированными значениями параметров
  getModel = (): Model => {
    return { paramValues: this.state.editedParams };
  };

  render() {
    const { params } = this.props;
    const { editedParams } = this.state;

    return (
      <div>
        {/* Отображение параметров и формы редактирования */}
        {params.map((param) => {
          const editedParam = editedParams.find((editedParam) => editedParam.paramId === param.id);
          const value = editedParam ? editedParam.value : '';

          return (
            <div key={param.id} className="wrapper">
              <label htmlFor={`param-${param.id}`}>{param.name}</label>
              <input id={`param-${param.id}`} type="text" value={value} onChange={(e) => this.handleParamChange(param.id, e.target.value)} />
            </div>
          );
        })}
      </div>
    );
  }
}

// Корневой компонент приложения
const App = () => {
  // Дефолтные параметры товара
  const params: Param[] = [
    {
      id: 1,
      name: 'Назначение',
      type: 'string',
    },
    {
      id: 2,
      name: 'Длина',
      type: 'string',
    },
  ];

  // Модель товара с заданными значениями параметров
  const model = {
    paramValues: [
      {
        paramId: 1,
        value: 'повседневное',
      },
      {
        paramId: 2,
        value: 'макси',
      },
    ],
  };

  return (
    <div>
      <h1>Редактор параметров</h1>
      <ParamEditor params={params} model={model} />
    </div>
  );
};

export default App;
